import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    callbacks: {
        async jwt({ token }) {
          token.userRole = "admin"
          return token
        }
      }
}

export default NextAuth(authOptions);