import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "./service/dbConnect";
import User from "./lib/models/user";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        await dbConnect();

        const user = await User.findOne({ email: credentials.email });

        if (!user) throw new Error("No account found with this email");
        if (!user.password) throw new Error("Please sign in with Google");

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) throw new Error("Incorrect password");

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image,
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        await dbConnect();

        const existing = await User.findOne({ email: user.email });

        if (!existing) {
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            provider: "google",
          });
        }
      }

      return true;
    },
     async jwt({ token, user }) {
      if (user) 
        token.id = user.id
      return token
    },
     async session({ session, token }) {
      session.user.id = token.id
      return session
    },
  },
   pages: {
    signIn: '/login',
  },

  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
};
