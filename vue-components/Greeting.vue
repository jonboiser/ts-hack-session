<template>
    <div>
        HELLO {{ greeting }}
    </div>

</template>

<script lang="ts">

    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component
    export default class Greeting extends Vue {
        @Prop()
        greeting: string

        foo() {
            return 'foo';
        }
    }

</script>