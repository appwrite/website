<script lang="ts" context="module">
  import { Carousel } from "$lib/components";
  import type { EventCardProps } from "$routes/community/EventCard.svelte";
  import EventCard from "$routes/community/EventCard.svelte";

  export const events: EventCardProps[] = [
    {
      href: "https://discord.com/events/564160730845151244/1218597329024843837",
      cover: {
        src: "/images/community/events/28march-office-hours.png",
        alt: "",
      },
      date: "2024-03-28",
      location: "Discord",
      title: "Office Hours: Ask me anything!",
      description:
        "Join us for another round of Office Hours, where we answer your questions and geek out on everything tech and Appwrite!",
      buttonText: "View event",
    },
    {
      href: "https://discord.com/events/564160730845151244/1218597959017431192",
      cover: {
        src: "/images/community/events/4april-office-hours.png",
        alt: "",
      },
      date: "2024-04-04",
      location: "Discord",
      title: "Office Hours: Ask me anything!",
      description:
        "Join us for another round of Office Hours, where we answer your questions and geek out on everything tech and Appwrite!",
      buttonText: "View event",
    },
    {
      href: "https://discord.com/events/564160730845151244/1218598369363230872",
      cover: {
        src: "/images/community/events/11april-office-hours.png",
        alt: "",
      },
      date: "2024-04-11",
      location: "Discord",
      title: "Office Hours: Ask me anything!",
      description:
        "Join us for another round of Office Hours, where we answer your questions and geek out on everything tech and Appwrite!",
      buttonText: "View event",
    },
    {
      href: "https://discord.com/events/564160730845151244/1218598369363230872",
      cover: {
        src: "/images/community/events/11april-office-hours.png",
        alt: "",
      },
      date: "2024-04-11",
      location: "Discord",
      title: "Office Hours: Ask me anything!",
      description:
        "Join us for another round of Office Hours, where we answer your questions and geek out on everything tech and Appwrite!",
      buttonText: "View event",
    },
    {
      href: "https://discord.com/events/564160730845151244/1218598369363230872",
      cover: {
        src: "/images/community/events/11april-office-hours.png",
        alt: "",
      },
      date: "2024-04-11",
      location: "Discord",
      title: "Office Hours: Ask me anything!",
      description:
        "Join us for another round of Office Hours, where we answer your questions and geek out on everything tech and Appwrite!",
      buttonText: "View event",
    },
  ];
</script>

<Carousel size="big">
  <svelte:fragment slot="header">
    <h4 class="web-label web-u-color-text-primary">Upcoming Events</h4>
  </svelte:fragment>
  {#each events as event}
    <li>
      <EventCard
        href={event.href}
        cover={event.cover}
        date={event.date}
        location={event.location}
        title={event.title}
        description={event.description}
        buttonText={event.buttonText}
      />
    </li>
  {/each}
</Carousel>
