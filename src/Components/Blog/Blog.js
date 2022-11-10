import React from "react";

const Blog = () => {
  return (
    <div>
     
      <div className="w-4/5 md:w-2/3  mx-auto py-20">
      <h2 className="text-center text-5xl mb-10">Latest Blogs </h2>
        {/* first question */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Difference Between SQL and NoSQL?
          </div>
          <div className="collapse-content">
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Sql</th>
                    <th>Nosql</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Definition</th>
                    <td>
                      SQL databases are primarily called <br /> RDBMS or
                      Relational Databases
                    </td>
                    <td>
                      NoSQL databases are primarily called as <br />{" "}
                      Non-relational or distributed database
                    </td>
                  </tr>

                  <tr>
                    <th>Design for</th>
                    <td>
                      Traditional RDBMS uses SQL syntax and queries <br />
                      to analyze and get the data for further insights. <br />
                      They are used for OLAP systems.
                    </td>
                    <td>
                      Traditional RDBMS uses SQL syntax and queries to <br />
                      analyze and get the data for further insights. <br />
                      They are used for OLAP systems.
                    </td>
                  </tr>

                  <tr>
                    <th>Query Language</th>
                    <td>Structured query language (SQL)</td>
                    <td>No declarative query language</td>
                  </tr>

                  <tr>
                    <th>Type</th>
                    <td>SQL databases are table based databases</td>
                    <td>
                      NoSQL databases can be document based, <br /> key-value pairs,{" "}
                      <br />
                      graph databases
                    </td>
                  </tr>

                  <tr>
                    <th>Variations</th>
                    <td>One type with minor variations.</td>
                    <td>
                      Many different types which include key-value <br /> stores,{" "}
                       document databases, and graph databases.
                    </td>
                  </tr>

                  <tr>
                    <th>Best Used for</th>
                    <td>
                      RDBMS database is the right option for <br /> solving ACID
                      problems.
                    </td>
                    <td>
                      NoSQL is a best used for solving data <br /> availability
                      problems
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* second quetion  */}

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-5 mb-5"
        >
          <div className="collapse-title text-xl font-medium">
            Difference between Node.JS and Javascript?
          </div>
          <div className="collapse-content">
            <p className="mb-2 text-2xl">
              NodeJS is a cross-platform and opensource Javascript runtime
              environment that allows the javascript to be run on the
              server-side. Nodejs allows Javascript code to run outside the
              browser. Nodejs comes with a lot of modules and mostly used in web
              development.
            </p>

            <br />

            <p className="mb-2 text-2xl">
              Javascript is a Scripting language. It is mostly abbreviated as
              JS. It can be said that Javascript is the updated version of the
              ECMA script. Javascript is a high-level programming language that
              uses the concept of Oops but it is based on prototype inheritance.
            </p>

            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Sl</th>
                    <th>Sql</th>
                    <th>Nosql</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>
                      Javascript is a programming language that is used <br />
                      for writing scripts on the website.
                    </td>
                    <td>NodeJS is a Javascript runtime environment.</td>
                  </tr>

                  <tr>
                    <th>2</th>
                    <td>Javascript can only be run in the browsers.</td>
                    <td>
                      We can run Javascript outside the browser with <br />
                      the help of NodeJS.
                    </td>
                  </tr>

                  <tr>
                    <th>3</th>
                    <td>It is basically used on the client-side.</td>
                    <td>It is mostly used on the server-side.</td>
                  </tr>

                  <tr>
                    <th>4</th>
                    <td>
                      Javascript is capable enough to add HTML and play <br />
                      with the DOM.
                    </td>
                    <td>Nodejs does not have capability to add HTML tags.</td>
                  </tr>

                  <tr>
                    <th>5</th>
                    <td>
                      It is the upgraded version of ECMA script that uses <br />
                      Chrome’s V8 engine written in C++.
                    </td>
                    <td>Nodejs is written in C, C++ and Javascript.</td>
                  </tr>

                  <tr>
                    <th>6</th>
                    <td>
                      Some of the javascript frameworks are RamdaJS, TypedJS,
                      etc.
                    </td>
                    <td>
                      Some of the Nodejs modules are Lodash, express etc. <br />
                      These modules are to be imported from npm.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* third question */}

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5"
        >
          <div className="collapse-title text-xl font-medium">
            What is JWT, and how does it work?
          </div>
          <div className="collapse-content">
            <p className="mb-2 text-2xl">
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.
            </p>

            <br />

            <p className="mb-2 text-3xl text-red-400 font-bold">
              How JWT Works?
            </p>

            <p className="mb-2 text-2xl">
              JWTs differ from other web tokens in that they contain a set of
              claims. Claims are used to transmit information between two
              parties. What these claims are depends on the use case at hand.
              For example, a claim may assert who issued the token, how long it
              is valid for, or what permissions the client has been granted.{" "}
            </p>
            <br />

            <p className="mb-2 text-2xl">
              {" "}
              A JWT is a string made up of three parts, separated by dots (.),
              and serialized using base64. In the most common serialization
              format, compact serialization, the JWT looks something like this:
              xxxxx.yyyyy.zzzzz.{" "}
            </p>

            <p className="mb-2 text-2xl">
              {" "}
              Once decoded, you will get two JSON strings: <br />
              The header and the payload. <br />
              The signature. <br />
              The JOSE (JSON Object Signing and Encryption) header contains the
              type of token — JWT in this case — and the signing algorithm.{" "}
            </p>
            <br />

            <p className="mb-2 text-2xl">
              The payload contains the claims. This is displayed as a JSON
              string, usually containing no more than a dozen fields to keep the
              JWT compact. This information is typically used by the server to
              verify that the user has permission to perform the action they are
              requesting.{" "}
            </p>
            <br />

            <p className="mb-2 text-2xl">
              There are no mandatory claims for a JWT, but overlaying standards
              may make claims mandatory. For example, when using JWT as bearer
              access token under OAuth2.0, iss, sub, aud, and exp must be
              present. some are more common than others.{" "}
            </p>
            <br />

            <p className="mb-2 text-2xl">
              The signature ensures that the token hasn’t been altered. The
              party that creates the JWT signs the header and payload with a
              secret that is known to both the issuer and receiver, or with a
              private key known only to the sender. When the token is used, the
              receiving party verifies that the header and payload match the
              signature.
            </p>

            <div className="overflow-x-auto"></div>
          </div>
        </div>

        {/* 4th question */}

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5"
        >
          <div className="collapse-title text-xl font-medium">
            How does NodeJS handle multiple requests at the same time?
          </div>
          <div className="collapse-content">
            <p className="mb-2 text-2xl">
              Given a NodeJS application, since Node is single threaded, say if
              processing involves a Promise.all that takes 8 seconds, does this
              mean that the client request that comes after this request would
              need to wait for eight seconds? No. NodeJS event loop is single
              threaded. The entire server architecture for NodeJS is not single
              threaded.
            </p>

            <br />

            <p className="mb-2 text-2xl">
              NodeJS Web Server maintains a limited Thread Pool to provide
              services to client requests. Multiple clients make multiple
              requests to the NodeJS server. NodeJS receives these requests and
              places them into the EventQueue . NodeJS server has an internal
              component referred to as the EventLoop which is an infinite loop
              that receives requests and processes them. This EventLoop is
              single threaded. In other words, EventLoop is the listener for the
              EventQueue.
            </p>
            <br />

            <p className="mb-2 text-2xl">
              The listener(the event loop) processes the request and if it is
              able to process the request without needing any blocking IO
              operations, then the event loop would itself process the request
              and sends the response back to the client by itself. If the
              current request uses blocking IO operations, the event loop sees
              whether there are threads available in the thread pool, picks up
              one thread from the thread pool and assigns the particular request
              to the picked thread. That thread does the blocking IO operations
              and sends the response back to the event loop and once the
              response gets to the event loop, the event loop sends the response
              back to the client.
            </p>

            <div className="overflow-x-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
