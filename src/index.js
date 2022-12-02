import React, { useState } from 'react';
import { render } from 'react-dom';
import { GraphQLEditor } from 'graphql-editor';

const schema = `type Pizza {
  taste: String
  size: Int
}
type Query{
	pizzas: [Pizza!]
}
`;

export const App = () => {
  const [gql, setGql] = useState('');
  return (
    <div
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        alignSelf: 'stretch',
        display: 'flex',
        position: 'absolute',
      }}
    >
      <GraphQLEditor
        gql={gql}
        setGql={(gqlString) => setGql(gqlString)}
        schema={{ code: schema }}
      />
    </div>
  );
};

render(<App />, document.getElementById('root'));