<template>
  <div class="user-home">
    <header>
        <img src="../assets/images/icon.svg" alt="Github">
        <h2>Github Userboard</h2>
        <input type="search"/>
    </header>
    <main>
        <section>
            <h3>Top Users</h3>
            <user-list :modelData="data"></user-list>
        </section>
    </main>
    <footer>
        <img src="../assets/images/icon.svg" alt="Github">
        <h2>&#169; All right reserved 2022</h2>
    </footer>
  </div>
</template>

<script>
import UserList from "./UserList.vue";

export default {
    components: {
        UserList
    },
    data() {
        return {
            data: [],
        };
    },
    async mounted() {
        this.data = await this.getUsers(10);
    },
    methods: {
        async getUsers(topUsers)  {
            let response = await fetch(`https://api.github.com/users?per_page=${topUsers}`);
            return await response.json();
        },
        loadDashBoard() {
            this.$router.addRoute({
                name: "dashboard",
                path: "/dashboard",
                component: UserList,
            });
            this.$router.push({
                name: "dashboard",
            });
            console.log(this.$router.options.routes);
            this.isDashboard = true;
        },
    },
};
</script>

<style>
.user-home { 
  display: flex; 
  flex-direction: column;
  height: 100vh;
}

.user-home header {
    padding: 0 20px;
    background: #24292F;
    box-shadow: 0px 12px 36px rgba(204, 204, 204, 0.25);
    display: flex;
}
.user-home header h2 {
    color: #fff;
    font-size: 20px;
    margin: 16px 10px;
    flex: 1;
}
.user-home input {
    background: #fff;
    border-radius: 12px;
    margin: 16px 0;
    width: 16%;
    align-items: flex-end;
}
.user-home footer {
    margin-top:auto; 
    padding: 10px 20px;
    background: #24292F;
    box-shadow: 0px 12px 36px rgba(204, 204, 204, 0.25);
    color: #fff;
    text-align: center;
    font-size: 10px;
}
.user-home h3 {
    font-size: 48px;
    text-align: center;
    padding: 30px 0;
}
.user-home section {
    width: 85%;
    margin: 10px auto;
}
</style>