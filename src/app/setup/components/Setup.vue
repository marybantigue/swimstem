<template>
  <div id="setup-view">

    <nav class="level">
      <div class="level-left">
        <h1 class="title is-2">Setup</h1>
      </div>
    </nav>
    <div class="row">
      <div class="col-xs-12">
          <form class="form"  v-on:submit.prevent>
            <div class="form-group">
              <label for="lanes" class="control-label">Number of Lanes</label>
              <input type="number" class="form-control" name="lanes" step="1" v-model="setup.lanes">
            </div>
            <div class="form-group">
              <label for="bracket" class="control-label">Brackets</label>
              <input type="text" class="form-control" name="bracket" placeholder="Add bracket" step="1" v-model="newBracket" >
              <button class="btn"  v-on:click="addBracket">Add</button>
            </div>
            <ul class="bracket-list list-group">
              <li v-for="bracket in setup.brackets"
                class="bracket list-group-item"
                :key="bracket.id">
                <span class="badge"><i class="fa fa-close"></i></span>
                <input class="edit" type="text"
                  v-model="bracket.title">
              </li>
            </ul>
            <p class="control">
              <button class="button is-success" type="submit"  v-on:click="processSave()">Submit</button>
            </p>
          </form>
      </div>
    </div>


  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'setup',
  data: () => {
    return {
      editing: false,
      setup: {
        lanes: 0,
        brackets: []
      },
      newBracket: ''
    }
  },
  methods: {
    ...mapActions([
      'createSetup'
    ]),
    addBracket: function () {
      var value = this.newBracket && this.newBracket.trim()
      if (!value) {
        return
      }
      this.setup.brackets.push({
        title: value
      })
      this.newBracket = ''
    },
    processSave: function () {
      this.saveSetup()
    },
    saveSetup () {
      this.createSetup(this.setup)
    }
  }
}
</script>

<style scoped lang='scss'>

</style>
