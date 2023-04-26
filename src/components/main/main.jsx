import React from "react";
import { v4 as uuid } from "uuid";
import logo from "./team_logo.png";
import axios from 'axios'
import logoPre from "./pre2.jpg";
import QRCode from 'qrcode.react';

import "semantic-ui-css/semantic.min.css";

import { Input, Button, Grid, Header, Image, Card, Container, Icon } from "semantic-ui-react";
import './app.css';

export default class Main extends React.Component {
  state = {
    message: " this is message",
    qrCode:"www.google.com",
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

    axios.post("https://team3-dot-rice-comp-539-spring-2022.uk.r.appspot.com/api/v1/create-short/", {
      longUrl: input,
      expiresDate: this.getDate()
    }).then((res) => {
      console.log(res.data)
      
    let changeVal =  async () => {
        await this.setState({
          qrCode: "https://team3-dot-rice-comp-539-spring-2022.uk.r.appspot.com/api/v1/" + res.data,
        });
      }

      changeVal();
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

  helperFunc = () => {
    console.log(this.state.qrCode);
    console.log(this.state.message);
  }

  render() {
    return (

      <div>
        <div >
          <Button
            style={{ width: 100 }}
            primary
            content="Log out"
            href="login"
          ></Button>
          <Button
            style={{ width: 100 }}
            primary
            content="Dashboard"
            href="dashboard"
          ></Button>
        </div>
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
                placeholder="Please enter the url..."
                onChange={this.inputChange}
              />
              <Button
                style={{ width: 100 }}
                primary
                onClick={this.clickFunction}
                content="Shorten"
                icon="cut icon"
              ></Button>
            </div>
            <div style={{ padding: 10 }}></div>
            <div>
              <Input style={{ width: 500 }} placeholder="Shorten url generated" value="" id="resultBox" />
              <Button
                style={{ width: 100 }}
                primary
                content="Copy"
                icon="copy outline"
                onClick={this.copyFunction}
              ></Button>
                <Button
                style={{ width: 100 }}
                primary
                content="Copy"
                icon="copy outline"
                onClick={this.helperFunc}
              ></Button>
            </div>
            <div>
            {/* id="qrCode" */}
              <QRCode
                value={this.state.qrCode} // 生成二维码的内容
                size={300} // 二维码的大小
                fgColor="#000000" // 二维码的颜色
                imageSettings={{ // 中间有图片logo
                  src: {logo},
                  height: 100,
                  width: 100,
                  excavate: true
                }}
              />
            </div>
            <Header as="h2" textAlign="center">
              <div style={{ paddingTop: 30 }}>Premium Plans</div>
              <Image
                style={{ width: 400, height: 200 }}
                src={logoPre}
                alt="Link Wizard"
              />
              {/* Premium Plans< */}
              <Container>
                {/* <h1>Premium Plans</h1> */}
                <Grid columns={3} doubling stackable>
                  <Grid.Column>
                    <Card fluid>
                      <Card.Content>
                        <Card.Header textAlign='center'>Basic Plan</Card.Header>
                        <Card.Meta textAlign='center'>$15/month</Card.Meta>
                        <Card.Description textAlign='left'>
                          <p><Icon name='check' /><span className="feature-text">Up to 50 Use/Month</span></p >
                          <p><Icon name='check' /><span className="feature-text">Basic Link Redirects</span></p >
                          <p><Icon name='check' /><span className="feature-text">Generate QR Code</span></p >
                          <p><Icon name='close icon' /><span className="feature-text">Limited email customer support</span></p >
                          <p><Icon name='close icon' /><span className="feature-text">Advertisement Included</span></p >
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra textAlign='center'>
                        <Button color='blue'>Choose Plan</Button>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card fluid>
                      <Card.Content>
                        <Card.Header textAlign='center'>Standard Plan</Card.Header>
                        <Card.Meta textAlign='center'>$35/month</Card.Meta>
                        <Card.Description textAlign='left'>
                          <p><Icon name='check' /><span className="feature-text">Up to 150 Use/Month</span></p >
                          <p><Icon name='check' /><span className="feature-text">Custom Link Redirects</span></p >
                          <p><Icon name='check' /><span className="feature-text">Generate Custom QR Code</span></p >
                          <p><Icon name='check' /><span className="feature-text">24/7 email and phone support</span></p >
                          <p><Icon name='close icon' /><span className="feature-text">Few Advertisement Included</span></p >
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra textAlign='center'>
                        <Button color='blue'>Choose Plan</Button>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card fluid>
                      <Card.Content>
                        <Card.Header textAlign='center'>Premium Plan</Card.Header>
                        <Card.Meta textAlign='center'>$60/month</Card.Meta>
                        <Card.Description textAlign='left'>
                          <p><Icon name='check' /><span className="feature-text">Unlimited Use/Month</span></p >
                          <p><Icon name='check' /><span className="feature-text">Custom Link Redirects</span></p >
                          <p><Icon name='check' /><span className="feature-text">More Powerful QR Code</span></p >
                          <p><Icon name='check' /><span className="feature-text">Priority email and phone support</span></p >
                          <p><Icon name='check' /><span className="feature-text">No Advertisement Included</span></p >
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra textAlign='center'>
                        <Button color='blue'>Choose Plan</Button>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </Grid>
              </Container>

            </Header>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
