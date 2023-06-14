import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth';
import CredentialsProvider  from 'next-auth/providers/credentials';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            async authorize(creds, req) {
              console.log('authorize logic');
              console.log(`creds: ${JSON.stringify(creds)}`);

              return {name:'Shubham Singh1', token: 'my-token'};
              // return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token }) {
          token.userRole = "admin"
          return token
        },
        async signIn(user, account, profile) {
          console.log('signIn callback invoked');
          return true
        }
      }
}

export default NextAuth(authOptions);