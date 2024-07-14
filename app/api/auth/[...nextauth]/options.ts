import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),

    ],
    callbacks: {
        async signIn({ user, account }: {
            user: {
                email: string,
                name: string
            },
            account: {
                provider: "google" | "github"
            }
        }) {
            if (!user || !user.email) {
                return false;
            }

            await prisma.user.upsert({
                select: {
                    id: true
                },
                where: {
                    email: user.email
                },
                create: {
                    email: user.email,
                    name: user.name,
                    auth_type: account.provider === "google" ? "Google" : "Github"
                },
                update: {
                    name: user.name,
                    auth_type: account.provider === "google" ? "Google" : "Github"
                }
            });
            return true;


        },
        async session({session , token , user }){
            if(session.user && user ){
                session.user.id = user.id;
            }else if(session.user && token) {
                    session.user.id =token.sub;

            }
            return session
        },
        async jwt({ token, user }) {
            if (user) {
              token.id = user.id;
            }
            return token;
          },
        
        secret:process.env.NEXTAUTH_SECRET
    },
    
}