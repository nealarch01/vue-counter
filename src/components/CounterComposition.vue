<!-- Counter implementation using Composition API  -->

<template>
    <div class="counter">
        <div class="counter-text-container">
            <h1>Count:</h1>
            <h1 v-if="count > 0" class="positive">{{ count }}</h1>
            <h1 v-else-if="count < 0" class="negative">{{ count }}</h1>
            <h1 v-else-if="count === 0" class="neither">{{ count }}</h1>
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
import { defineComponent, ref } from "vue";
export default defineComponent({
    setup() {
        const count = ref(0);

        const incrementCount = () => {
            count.value++; // Access the value
        }

        const resetCount = () => {
            count.value = 0;
        }

        const decrementCount = () => {
            count.value--;
        }

        return {
            count,
            incrementCount,
            resetCount,
            decrementCount
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

div.counter-text-container > h1 {
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

p.btn-text {
    font-weight: bold;
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
