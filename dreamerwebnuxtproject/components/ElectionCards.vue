<template>
  <div>
    <v-app>
      <v-main>
        <v-row dense>
          <v-col v-for="card in $store.get('Elections/ElectionsVariables')"
                 :key="card.id"
                 :cols="3">
            <v-card
              class="mx-auto"
              outlined
              color="red lighten-1"
              max-width="500"
              max-height="500"
            >
              <v-list color="red lighten-1">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4" v-for="Author in $store.get('Users/GetUserAuthorOfElectionCardsById' ,card.ElectionCard.authorId)">
                      By {{Author.Username}}
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                      {{card.ElectionCard.title}}
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-h7 mb-1">
                      {{card.ElectionCard.subtitle}}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>{{card.ElectionCard.textInformation}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-avatar
                    size="80"
                    color="grey"
                  ></v-list-item-avatar>
                </v-list-item>
                <v-row dense>
                  <v-card-actions>
                    <v-btn
                      outlined
                      rounded
                      text
                    >
                      <Nuxt-link :to="`/ElectionCardMainPage/ElectionCard/${card.id}`">
                        Edit
                      </Nuxt-link>
                    </v-btn>
                  </v-card-actions>
                  <v-card-actions>
                    <v-btn
                      outlined
                      rounded
                      text
                      @click="$store.set('DeleteElectionAction', card)"
                    >
                      Delete
                    </v-btn>
                  </v-card-actions>
                </v-row>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <v-card
              class="mx-auto"
              outlined
              color="red lighten-1"
            >
              <v-list color="red lighten-1">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4">
                      By Unknown
                    </div>
                    <v-list-item>
                      <v-text-field
                        label="Election Name"
                        placeholder="Please type the name of the election"
                        v-model="title"
                      ></v-text-field>
                    </v-list-item>
                    <v-list-item>
                      <v-text-field
                        label="Election Subtitle"
                        placeholder="Please type the election subtitles"
                        v-model="subtitle"
                      ></v-text-field>
                    </v-list-item>
                    <v-list-item>
                      <v-text-field
                        label="Election Information"
                        placeholder="Please type any election information"
                        v-model="textInformation"
                      ></v-text-field>
                    </v-list-item>
                  </v-list-item-content>
                  <v-list-item-avatar
                    size="80"
                    color="grey"
                  ></v-list-item-avatar>
                </v-list-item>
                <v-row dense>
                  <v-card-actions>
                    <v-btn
                      outlined
                      rounded
                      text
                      @click="AddElectionOptions"
                    >
                        Add
                    </v-btn>
                  </v-card-actions>
                </v-row>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default
{
  name: "ElectionCards",
  data: () => ({
    title: "",
    subtitle: "",
    textInformation: "",
  }),
  computed: {
  },
  methods:{
    AddElectionOptions(e)
    {
      e.preventDefault();
      this.$store.set('AddElectionAction',{
        id: 0,
        authorId: 0,
        title: this.$data.title,
        subtitle: this.$data.subtitle,
        textInformation: this.$data.textInformation,
        HowManyCandidates: 1,
        HowManyCandidatesCanWin: 1,
        HowManyVotesDoVotersHave: 1,
        HowMuchOfAPercentageMustCandidatesNeedToWin: 1,
        HowManyElectionRounds: 1,
        HowManyVoters: 1,
        CanYouVoteForParties: false,
        DoVotesTransfer: false,
        Candidates:[]
      })
    },
  },
  created()
  {
    this.$store.set('FetchElections!', null);
    this.$store.set('FetchParty!', null);
    this.$store.set('FetchElectionCandidates!', null);
    this.$store.set('FetchSiteOptions!', null);
    this.$store.set('FetchUsers!', null);
  }

}
</script>

<style scoped>


</style>
