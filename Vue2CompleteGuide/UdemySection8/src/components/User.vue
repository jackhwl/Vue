<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User! {{name}} Age {{age}}</p>
        <button @click="changeName">Change my name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :myName="name" 
                    :userAge="age"
                    @nameWasChanged="name=$event"
                    :resetFn="resetName"
                    ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                @ageWasEdited="age=$event"
                :userAge="age"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Jack',
                age: 27
            };
        },
        methods: {
          changeName() {
              this.name = 'Wenlin';
          },
          resetName() {
              this.name = 'Jack3';
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
