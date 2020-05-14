<template>
    <div>
        <form novalidate class="md-layout md-alignment-top-center" @submit.prevent="validateMessage">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
            <md-card-header>
            <div class="md-title">Send Echo Message</div>
            </md-card-header>

            <md-card-content>
            <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('message')">
                    <label for="message">Message</label>
                    <md-input name="message" id="message" autocomplete="message to send" v-model="message" :disabled="sending" />
                    <span class="md-error" v-if="!$v.message.required">The message is required</span>
                    <span class="md-error" v-else-if="!$v.message.maxLength">Invalid message length (max. 255 characters)</span>
                </md-field>
                </div>  
            </div>          
            </md-card-content>

            <md-progress-bar md-mode="indeterminate" v-if="sending" />

            <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending">Send message</md-button>
            </md-card-actions>
        </md-card>

        <md-snackbar :md-active.sync="messageSent">The message was sent and we got {{ responseMessage }} from the backend!</md-snackbar>
        </form>
  </div>
</template>
<script lang='ts' src='./Echo.ts'></script>