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
        },
        SortBytitle()
        {
            this.Records.sort((record1,record2)=>
            record1.Title.localeCompare(record2.Title))
        },
        SortingByArtist()
        {
            this.Records.sort((record1,record2)=>
            record1.Artist.localeCompare(record2.Artist))
        }

    }
}).mount("#app") 