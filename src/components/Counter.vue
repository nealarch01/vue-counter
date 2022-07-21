<template>
    <div class="counter">
        <h1>Simple Counter App</h1>
        <h2>Count: {{ count }}</h2>
        <div class="counter-btns">
            <button class="counter-btn" id="decrement-btn" @click="decrementCount()"><p class="btn-text">-</p></button>
            <button class="counter-btn" id="reset-btn" @click="resetCount()"><p class="btn-text">Reset</p></button>
            <button class="counter-btn" id="increment-btn" @click="incrementCount()"><p class="btn-text">+</p></button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "Counter",
    components: {},
    data: () => { 
        return {
            count: 0 // Bound is binded between -100 and 100
        }
    },
    methods: {
        incrementCount() {
            if (this.count > 100) {
                return;
            }
            this.count++;
        },

        decrementCount() {
            if (this.count < -100) {
                return;
            }
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
</style>
