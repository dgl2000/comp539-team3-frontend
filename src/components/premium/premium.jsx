export default class Main extends React.Component {
    state = {
      message: " this is message",
      id: uuid(),
      result: "",
    };
  
    inputChange = (e) => {
      // console.log(e.target.value)
      this.setState({
        message: e.target.value,
      });
    };
  
    getDate = () => {
      const currentDate = new Date();
      const twoYearsAfter = new Date(currentDate.getFullYear() + 2, currentDate.getMonth(), currentDate.getDate());
      return twoYearsAfter
    }
  
    clickFunction = () => {
    
      let input = this.state.message;
  
      // const headers = {
      //   "Content-Type": "application/json"
      // }
  
      axios.post("https://team3-dot-rice-comp-539-spring-2022.uk.r.appspot.com/api/v1/create-short", {
        longUrl: input,
        expiresDate: this.getDate()
      }).then((res) => {
        console.log(res.data)
        document.getElementById("resultBox").value = "https://team3-dot-rice-comp-539-spring-2022.uk.r.appspot.com/api/v1/" + res.data
      })
    };
  
    copyFunction = () => {
      let shortenedUrl = document.getElementById("resultBox").value
      navigator.clipboard.writeText(shortenedUrl) // Write data to clipboard
      .then(() => {
        console.log('Data copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy data: ', err);
      });
    }
  
    render() {
      return (
        <div>
          <Grid
            textAlign="center"
            style={{ height: "80vh" }}
            verticalAlign="middle"
          >
            <Grid.Column>
              <Header as="h2" textAlign="center">
                <Image
                  style={{ width: 450, height: 300 }}
                  src={logo}
                  alt="Link Wizard"
                />
                <div>Url shortener</div>
              </Header>
              <div>
                <Input
                  style={{ width: 500 }}
                  placeholder="Enter url..."
                  onChange={this.inputChange}
                />
                <Button
                  style={{ width: 100 }}
                  primary
                  onClick={this.clickFunction}
                  content="Cut"
                  icon="cut icon"
                ></Button>
              </div>
              <div style={{ padding: 10 }}></div>
              <div>
                <Input style={{ width: 500 }} value = "" id = "resultBox"/>
                <Button
                  style={{ width: 100 }}
                  primary
                  content="Copy"
                  icon="copy outline"
                  onClick={this.copyFunction}
                ></Button>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      );
    }
  }