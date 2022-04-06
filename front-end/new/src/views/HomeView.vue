<template>
    <div class="home">
        <section class="word-repository">
            <div class="entry" v-for="word in words" :key="word.id">
                <h2>{{word.word}}</h2>
                <h3>{{word.language}}</h3>
                <p>{{word.engWord}}</p>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'HomeView',
    data() {
        return {
            words: [],
        }
    },
    created() {
        this.getWords();
    },
    methods: {
        async getWords() {
            try {
                let response = await axios.get('/api/words');
                this.words = response.data;
                return true;
            }   catch(error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>
.word-repository {
  column-gap: 1.5em;
}

.entry {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
  background: #ADA599;
  text-align: center;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .word-repository {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .word-repository {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .word-repository {
    column-count: 2;
  }
}
</style>


