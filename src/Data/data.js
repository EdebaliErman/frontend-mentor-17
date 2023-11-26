export const images = {
    logo: process.env.PUBLIC_URL + "./assets/logo.svg",
    logoWhite: process.env.PUBLIC_URL + "./assets/logo-white.svg",
    mockups: process.env.PUBLIC_URL + "./assets/illustration-mockups.svg",
    grow: process.env.PUBLIC_URL + "./assets/illustration-grow-together.svg",
    flowing: process.env.PUBLIC_URL + "./assets/illustration-flowing-conversation.svg",
    users: process.env.PUBLIC_URL + "./assets/illustration-your-users.svg",
    email: process.env.PUBLIC_URL + "./assets/icon-email.svg",
    phone: process.env.PUBLIC_URL + "./assets/icon-phone.svg",
    location: process.env.PUBLIC_URL + "./assets/icon-location.svg",
    facebook:<svg className="group-hover:fill-pinkbg fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><style></style><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>,
    instagram: <svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path className="group-hover:fill-pinkbg " d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="#fff" fillRule="nonzero"/></svg>,
    twitter: <svg  width="24" height="20" xmlns="http://www.w3.org/2000/svg"><path className="group-hover:fill-pinkbg" d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" fill="#fff" fillRule="nonzero"/></svg>


}

export const headerText = {
    title: "Build The Community Your Fans Will Love",
    comment: "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion."
}

export const aboutData = [{
    title: "Grow Together",
    comment: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. ",
    img: images.grow,
    style: "rigth-card",
},
{
    title: "Flowing Conversations",
    comment: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
    img: images.flowing,
    style: "left-card",
},
{
    title: "Your Users",
    comment: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately. ",
    img: images.users,
    style: "rigth-card",
}
]