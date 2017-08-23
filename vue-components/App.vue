<template>

    <div>
        <greeting :message="message" />
        <p>{{ enthusiasticMessage }}</p>
    </div>

</template>

<script lang="ts">

    import { Component, Prop, Vue } from 'vue-property-decorator'
    import Greeting from './Greeting.vue';

    type ComplicatedThing = {
        quanta: number,
        extraSpatialDimensions: number,
    }

    @Component({
        components: {
            Greeting,
        }
    })
    export default class App extends Vue {
        @Prop()
        message: string

        @Prop()
        nonsense: ComplicatedThing

        // computed properties are getters
        get enthusiasticMessage(): string {
            return this.message + this.nonsense.extraSpatialDimensions + '!!!';
        }

    }

    // Exercise: rename one of the props and fix the resulting errors
    // Exercise: let this component take a 'names' prop, which is Array<string>
    //   incorporate these names into enthusiasticMessage
    // Advanced Exercise: add a webpack configuration to compile this app

</script>