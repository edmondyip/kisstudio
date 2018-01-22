<template>
  <section>
    <div>
      <p>To Kisstudio,</p>
      <p>Hi, I got on hand a project with a detailed briefing . May I ask for a quotation for it? ✍</p>
      <p>Please contact me via</p>
      <p>email:
        <input type="text" /> or</p>
      <p>phone:
        <input type="text" />
      </p>
      <p>from:
        <input type="text" />.</p>
      <button>Send</button>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Contact',
    metaInfo: {
      title: 'Contact Us',
      link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Reenie+Beanie'
      }]
    },
  }

</script>

<style lang="scss" scoped>
  section {
    div {
      width: 900px;
      height: 45vh;
      margin: 20vh auto;
      position: relative;
      background: url(~assets/img/contact-bg.jpg) no-repeat center center;
      padding: 10vh;
      p {
        font-family: 'Reenie Beanie';
        font-size: 2.8rem;
        line-height: 3rem;
        margin: 20px 0;
        input {
          background: none;
          border: 0;
          font-size: 2rem;
          border-bottom: 1px solid #666666;
          width: 250px;
        }
      }
      button {
        background: #ffffff;
        font-family: 'Reenie Beanie';
        border: 0;
        font-size: 2.8rem;
        margin: 50px auto 0;
        width: 250px;
        display: block;
      }
    }
  }

</style>
