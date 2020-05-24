import Head from "next/head";
import React, { Component } from "react";

class IndexPage extends Component<any, any, any> {
  render(): any {
    return (
      <>
        <Head>
          <title>www.prat.ch</title>
        </Head>

        <div>
          <ul>
            <li>
              <a href="//menomote.prat.ch">
                Menomote - a musical note quiz generator
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default IndexPage;
