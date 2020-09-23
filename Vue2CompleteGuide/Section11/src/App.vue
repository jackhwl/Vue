<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input  :value="userData.email"
                                @input="userData.email = $event.target.value"
                                type="text"
                                id="email"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input  v-model.lazy="userData.password"
                                type="password"
                                id="password"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input  v-model="userData.age"
                                type="number"
                                id="age"
                                class="form-control">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea   v-model="message"
                            id="message"
                            rows="5"
                            class="form-control"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                         <label for="sendAll">
                            <input  v-model="sendAll"
                                    type="checkbox"
                                    id="sendAll"
                                    value="SendAll"> Check All
                        </label>
                        <label for="sendmail">
                            <input  v-model="sendMail"
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input  v-model="sendMail"
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"> Send Infomail
                        </label>
                        <label for="sendCard">
                            <input  v-model="sendMail"
                                    type="checkbox"
                                    id="sendCard"
                                    value="SendCard"> Send a Card
                        </label>
                        <label for="sendCall">
                            <input  v-model="sendMail"
                                    type="checkbox"
                                    id="sendCall"
                                    value="SendCall"> Send Phone call
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input  v-model="gender"
                                type="radio"
                                id="male"
                                value="Male"> Male
                    </label>
                    <label for="female">
                        <input  v-model="gender"
                                type="radio"
                                id="female"
                                value="Female"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control">
                        <option v-for="priority in priorities" 
                            :selected="priority=='Medium'" :key="priority">
                            {{ priority }}
                        </option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-switch v-model="dataSwitch"></app-switch>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button @click.prevent="submitted"
                            class="btn btn-primary">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Age: {{userData.age}}</p>
                        <p style="white-space: pre">Message: {{message}} </p>
                        <p><strong>Send Mail? {{sendMail}}</strong></p>
                        <ul>
                            <li v-for="item in sendMail" :key="item">{{ item }}</li>
                        </ul>
                        <p>Gender: {{gender}}</p>
                        <p>Priority:</p>
                        <p>Switched: {{dataSwitch}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Switch from './Switch.vue';

    export default {
        data() {
            return {
                userData: {
                  email: '',
                  password: '',
                  age: 27
                },
                message: 'A new Text',
                sendMail: [],
                gender: 'Male',
                priorities: ['High', 'Medium', 'Low'],
                dataSwitch: true,
                isSubmitted: false
            }
        },
        computed: {
            sendAll: {
                get() {
                    return this.sendMail.length == 4;
                },
                set(newValue) {
                    this.sendMail = newValue ? ['SendMail', 'SendInfoMail', 'SendCard', 'SendCall'] : [];
                }
            }
        },
        methods: {
            submitted() {
                this.isSubmitted = true;
            }
        },
        components: {
            appSwitch: Switch
        }
    }
</script>

<style>

</style>
