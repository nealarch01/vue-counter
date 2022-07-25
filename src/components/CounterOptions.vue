<!-- Counter implementation using Options API  -->

<template>
    <div class="counter">
        <div class="counter-text-container">
            <h1>Count:</h1>
            <h1 v-if="count > 0" class="positive">{{ count }}</h1>
            <h1 v-if="count < 0" class="negative">{{ count }}</h1>
            <h1 v-if="count === 0" class="neither">{{ count }}</h1>
        </div>
        <div class="counter-btns">
            <button class="counter-btn" id="decrement-btn" @click="decrementCount()">
                <p class="btn-text">-</p>
            </button>
            <button class="counter-btn" id="reset-btn" @click="resetCount()">
                <p class="btn-text">Reset</p>
            </button>
            <button class="counter-btn" id="increment-btn" @click="incrementCount()">
                <p class="btn-text">+</p>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "Counter", // https://vuejs.org/api/options-misc.html#name
    components: {}, // https://vuejs.org/api/options-misc.html#components
    data: () => {
        return {
            count: 0
        }
    },
    methods: {
        incrementCount() {
            this.count++;
        },

        decrementCount() {
            this.count--;
        },

        resetCount() {
            this.count = 0;
        }
    }
});
</script>

<style scoped>
div.counter {
    display: flex;
    flex-direction: column;
    align-items: center;
}

div.counter-text-container {
    display: flex;
    flex-direction: row;
}

div.counter-text-container>h1 {
    margin-right: 2px;
    margin-left: 2px;
}

button#decrement-btn {
    background-color: red;
}

button#increment-btn {
    background-color: green;
}

button.counter-btn {
    height: 70px;
    width: 70px;
    border-radius: 10px;
    border-style: none;
    margin: 8px;
}

button.counter-btn:active {
    opacity: 0.6;
}

p.btn-text {
    font-weight: 500;
    font-size: 24px;
}

h1.positive {
    color: green;
}

h1.negative {
    color: red;
}

h1.neither {
    color: gray;
}


</style>
