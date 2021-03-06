import axios from "axios"
import {nanoid} from "nanoid/async"

export default
{
  async FetchElections({commit})
  {
    await axios.get("http://localhost:8000/ElectionsVariables")
      .then(data=>(commit("PopulateElectionStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    await axios.get("http://localhost:8000/ElectionsMap")
      .then(data=>(commit("PopulateElectionMapStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async FetchParty({commit})
  {
    await axios.get("http://localhost:8000/ElectionParties")
      .then(data=>(commit("PopulatePartiesStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async FetchElectionCandidates({commit})
  {
    await axios.get("http://localhost:8000/ElectionCandidates")
      .then(data=>(commit("PopulateElectionCandidatesStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    await axios.get("http://localhost:8000/CandidateIssues")
      .then(data=>(commit("PopulateCandidateIssuesStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async FetchUsers({commit})
  {
    await axios.get("http://localhost:8000/UsersMap")
      .then(data=>(commit("PopulateUsersMapStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    await axios.get("http://localhost:8000/Users")
      .then(data=>(commit("PopulateUsersStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    await axios.get("http://localhost:8000/Voters")
      .then(data=>(commit("PopulateVotersStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async FetchSiteOptions({commit})
  {
    await axios.get("http://localhost:8000/ElectionOptions")
      .then(data=>(commit("PopulateElectionMetaOptionsStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },

  async ChangePartySelectedStateAction({commit}, PartyCard)
  {
    await axios.put(`http://localhost:8000/ElectionCandidates/${PartyCard.id}`, { PartyCard})
      .then(data=>(commit("ChangePartySelectedStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async AddPartyAction({commit}, PartyCard)
  {
    PartyCard.id = await nanoid()
    await axios.post("http://localhost:8000/ElectionParties", {PartyCard})
      .then(data=>(commit("AddPartyStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    //const ElectionCardId = ElectionCard.id
    //await axios.post("http://localhost:8000/ElectionsMap", {ElectionCardId})
    //.then(data=>(commit("AddElectionMapStateMutation", data.data)))
    //.catch (error=>{ console.log(error)});
  },
  async DeletePartyAction({commit}, PartyCard)
  {
    await axios.delete(`http://localhost:8000/ElectionParties/${PartyCard.id}`)
      .then(data=>(commit("DeletePartyStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    //await axios.delete(`http://localhost:8000/ElectionsMap/${ElectionCard.id}`)
    //.then(data=>(commit("DeleteElectionMapStateMutation", data.data)))
    //.catch (error=>{ console.log(error)});
  },

  async ChangeCandidateSelectedStateAction({commit}, CandidateCard)
  {
    await axios.put(`http://localhost:8000/ElectionParties/${CandidateCard.id}`, { CandidateCard})
      .then(data=>(commit("ChangeCandidateSelectedStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async AddCandidateAction({commit}, CandidateCard)
  {
    CandidateCard.id = await nanoid()
    await axios.post("http://localhost:8000/ElectionCandidates", {CandidateCard})
      .then(data=>(commit("AddCandidateStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    //const ElectionCardId = ElectionCard.id
    //await axios.post("http://localhost:8000/ElectionsMap", {ElectionCardId})
    //.then(data=>(commit("AddElectionMapStateMutation", data.data)))
    //.catch (error=>{ console.log(error)});
  },
  async DeleteCandidateAction({commit}, CandidateCard)
  {
    await axios.delete(`http://localhost:8000/ElectionCandidates/${CandidateCard.id}`)
      .then(data=>(commit("DeleteCandidateStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    //await axios.delete(`http://localhost:8000/ElectionsMap/${ElectionCard.id}`)
    //.then(data=>(commit("DeleteElectionMapStateMutation", data.data)))
    //.catch (error=>{ console.log(error)});
  },

  async ChangeOptionSelectedStateAction({commit}, ElectionCard)
  {
    await axios.put(`http://localhost:8000/ElectionsVariables/${ElectionCard.id}`, {ElectionCard})
      .then(data=>(commit("ChangeOptionSelectedStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async AddElectionAction({commit}, ElectionCard)
  {
    ElectionCard.id = await nanoid()
    await axios.post("http://localhost:8000/ElectionsVariables", {ElectionCard})
      .then(data=>(commit("AddElectionStateMutation", data.data.ElectionCard)))
      .catch (error=>{ console.log(error)});
    //const ElectionCardId = ElectionCard.id
    //await axios.post("http://localhost:8000/ElectionsMap", {ElectionCardId})
      //.then(data=>(commit("AddElectionMapStateMutation", data.data)))
      //.catch (error=>{ console.log(error)});
  },
  async DeleteElectionAction({commit}, ElectionCard)
  {
    await axios.delete(`http://localhost:8000/ElectionsVariables/${ElectionCard.id}`)
      .then(data=>(commit("DeleteElectionStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    //await axios.delete(`http://localhost:8000/ElectionsMap/${ElectionCard.id}`)
      //.then(data=>(commit("DeleteElectionMapStateMutation", data.data)))
      //.catch (error=>{ console.log(error)});
  },

}
