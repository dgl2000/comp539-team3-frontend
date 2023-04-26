import React from 'react';
import { Table, Grid, Button } from 'semantic-ui-react';
import Chart from '../chart/chart';

const originalUrls = ['https://leetcode.com',
    'https://google.com',
    'Https://postman.com',
    'https://cloud.google.com',
    'https://www.rice.edu']
const shortenedUrls = ['https://team3-dot-rice-comp-539-spring-2022.uk.r.appspot.com/api/v1/8PIEUfUbggK/',
    'https://team3-dot-rice-comp-539-spring-2022.uk.r.appspot.com/api/v1/8PIEYfnviRU/',
    'https://team3-dot-rice-comp-539-spring-2022.uk.r.appspot.com/api/v1/8PIEbpBdBQm/',
    'https://team3-dot-rice-comp-539-spring-2022.uk.r.appspot.com/api/v1/8PIEhjJcaUC/',
    'https://team3-dot-rice-comp-539-spring-2022.uk.r.appspot.com/api/v1/8PIEmrja93I/'
]

export default class TopUrlTable extends React.Component {

    state = {
        // counts: [159, 237, 262, 305, 356],
        rows: [
            [originalUrls[0], 159, shortenedUrls[0]],
            [originalUrls[1], 237, shortenedUrls[1]],
            [originalUrls[2], 262, shortenedUrls[2]],
            [originalUrls[3], 305, shortenedUrls[3]],
            [originalUrls[4], 356, shortenedUrls[4]]
        ]
    }


    onClickUrl = (i) => {
        // window.open(shortenedUrls[i], "_blank");
        if (window.confirm("Do you want to open the website in a new tab")) {
            let tmp = this.state.rows;
            tmp[i][1] += 1;
            this.setState({
                rows: tmp
            })
            window.open(shortenedUrls[i], "_blank");
        }
    }

    render() {
        return (
            <div>
                <Button
                    style={{ width: 200 }}
                    primary
                    content="Back to main page"
                    href="mainPage"
                ></Button>
                <div style={{textAlign: 'center'}}>
                <Chart />
                
                <div><h2> Top 5 visited Urls </h2></div>
                <div>
                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine>Original urls</Table.HeaderCell>
                            <Table.HeaderCell>Count</Table.HeaderCell>
                            <Table.HeaderCell>Shortened urls</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.rows.map((row, i) => {
                            // console.log(row)
                            return (
                                // <tr>
                                //     <td data-label="originalUrl">{row[0]}</td>
                                //     <td data-label="count" key={'item' + i}>{row[1]}</td>
                                //     <td data-label="shortenedUrl" onClick={() => this.onClickUrl(i)}>{row[2]}</td>
                                // </tr>
                                <Table.Row>
                                    <Table.Cell>
                                        {row[0]}
                                    </Table.Cell>
                                    <Table.Cell singleLine>{row[1]}</Table.Cell>
                                    <Table.Cell onClick={() => this.onClickUrl(i)}>
                                        {row[2]}
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
                </div>
        </div>
</div>
            
            
        );
    }
}

                {/* <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Original Url</th>
                        <th>Count</th>
                        <th>Shortened Url</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.rows.map( (row, i) => {
                        // console.log(row)
                        return (
                            <tr>
                                <td data-label="originalUrl">{row[0]}</td>
                                <td data-label="count" key={'item' + i}>{row[1]}</td>
                                <td data-label="shortenedUrl" onClick={() => this.onClickUrl(i)}>{row[2]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> */}