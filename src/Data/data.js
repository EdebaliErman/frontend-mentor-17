export const images = {
    logo: process.env.PUBLIC_URL + "./assets/logo.svg",
    mockups: process.env.PUBLIC_URL + "./assets/illustration-mockups.svg",
    grow: process.env.PUBLIC_URL + "./assets/illustration-grow-together.svg",
    flowing: process.env.PUBLIC_URL + "./assets/illustration-flowing-conversation.svg",
    users: process.env.PUBLIC_URL + "./assets/illustration-your-users.svg"
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