    // location.hash return for default  -> #/1/
    //slice delete first element -> #
    //split convert to array, separates for -> /
const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'

export default getHash;