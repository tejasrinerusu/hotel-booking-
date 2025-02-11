import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";


const isPublicRoute = createRouteMatcher(['/','hotel-details/:id','/api/uploadthing','/sign-up(.*)','/sign-in(.*)']);

export default clerkMiddleware((auth,request)=>{
    if(!isPublicRoute(request)){
        auth().protect();
    }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};