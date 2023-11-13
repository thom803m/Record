const baseurl="http://localhost:5166/Api/Record"


Vue.createApp({
    data(){
        return{
            Record:{Title:"", Artist:"", Duration:"", PublicationYear, DownLoads:""},
            Records:[]
        }
    },
    async GetAllRecords()
    {
        this.GetAllRecords(baseurl)
    },
    methods:{
        async AllRecords(url)
        {
            const response = await axios.get(url)
            console.log("Created Books")
            this.Records = await response.data
        }
    }
}).mount("#app") 