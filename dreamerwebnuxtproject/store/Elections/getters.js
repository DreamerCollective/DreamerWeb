
export default
{
  GetElections: (state) =>
  {
    return state.ElectionsVariables
  },
  GetOneElections: (state) => (id) =>
  {
    console.log("This is the id", id)
    const Elections = state.ElectionsVariables.filter(function(a){return a.id === id})
    console.log("This is the Election", Elections)
    const ElectionObject = Elections.
    //return state.ElectionsVariables.filter(function(a){return a.id === id})
    console.log("This is the Election object", ElectionObject)
    return ElectionObject
  },
}
