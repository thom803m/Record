const baseurl="http://localhost:5166/Api/Record"


Vue.createApp({
    data(){
        return{
            Record:{Title:"", Artist:"", Duration:"", PublicationYear:"", DownLoads:""},
            Records:[],
            Titlesearch:"",
            choice:""
        }
    },
    async created()
    {
        this.AllRecords(baseurl)
        console.log("function called")
    },
    methods:{
        async AllRecords(url)
        {
            try
            {
                const response = await axios.get(url)
                console.log("Created Books")
                this.Records = await response.data
            }
            catch(ex)
            {
                alert(ex.message)
                
            }

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
        },
        async FilterByTitle(Titlesearch,choice)
        {
            try
            {
                if(choice=="title")
                {
                    const response = await axios.get(baseurl+"?Title=" + Titlesearch)
                    console.log("FilterBooks",Titlesearch)
                    this.Records = await response.data
                }
                else if(choice=="artist")
                {
                    const response = await axios.get(baseurl+"?Artist=" + Titlesearch)
                    console.log("FilterBooks",Titlesearch)
                    this.Records = await response.data
                }
            }
            catch(ex)
            {
                alert(ex.message)
                
            }
        },
        async FilterByArtist(SearchArtist)
        {
            try
            {
                const response = await axios.get(baseurl+"?Title=" + SearchArtist )
                console.log("FilterBooks",Titlesearch)
                this.Records = await response.data
            }
            catch(ex)
            {
                alert(ex.message)
                
            }  
        }

    }
}).mount("#app") 