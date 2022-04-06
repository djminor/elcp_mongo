<template>
  <div class="addPage">
        <h1>A place to add new words</h1>
        <div class="heading">
            <div class="circle">1</div>
            <h2>Add a Word</h2>
        </div>
        <div class="add">
            <div class="form">
                <input v-model="word" placeholder="Non-English word">
                <p></p>
                <input v-model="language" placeholder="Language">
                <p></p>
                <input v-model="engWord" placeholder="The word in English">
                <p></p>
                <button @click="upload()">Add Word to Dictionary</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'AddView',
    data() {
        return {
            word: "",
            language: "",
            engWord: "",
            addWord: null,
            words: [],
            findWord: "",
        }
    },
    methods: {
        async upload() {
            try {
                let r = await axios.post('/api/words', {
                    word: this.word,
                    language: this.language,
                    engWord: this.engWord
                });
                this.addWord = r;
                console.log("posted succesfully");
            }   catch(error) {
                console.log(error);
            }
        }
    },
}
</script>
<style scoped>
.image h2 {
  font-style: italic;
  font-size: 1em;
}
.addPage {
  margin-left: 20px;
}
.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}
/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}
</style>
