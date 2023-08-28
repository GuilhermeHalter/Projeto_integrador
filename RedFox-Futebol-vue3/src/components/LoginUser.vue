<script>

  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Aqui você pode adicionar a lógica de autenticação
        if (this.username === 'usuario' && this.password === 'senha') {
          alert('Login bem sucedido');
        } else {
          alert('Login falhou');
        }
      }
    }
  };
</script>
<template>
    <div class="login-container">
      <div class="profile-image">
        <img src="../img/pngfind.com-bite-mark-png-631239.png" alt="Profile" class="rounded-image">
      </div>
      <div class="login-card">
      <h2 class="login-title">Login</h2>
      <form @submit.prevent="login" class="login-form">

        <div class="input-wrapper">
          <label for="username" class="input-label">Username:</label>
          <input type="text" id="username" v-model="username"  class="input-field" required>
        </div>

        <div class="input-wrapper">
          <label for="password" class="input-label">Password:</label>
          <input type="password" id="password" v-model="password" class="input-field" required>
        </div>
        
        <button type="submit" class="login-button">Login</button>
      </form>
      </div>
    </div>
  </template>

  <style>
.profile-image {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.rounded-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #fc8759, #c01f1f);
}

.login-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 350px;
}

.login-title {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.input-wrapper {
  margin-bottom: 20px;
}

.input-label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #666;
}

.input-field {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #f9f9f9;
  border-color: rgb(196, 196, 196);
  border-radius: 5px;
  color: #333;
  transition: background-color 0.3s;
  
}

.input-field:focus {
  background-color: #e0e0e0;
  outline: none;
}

.login-button {
  background-color: #27ae60;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #219f54;
}
  </style>
  
  
