import {
  Button,
  Card,
  Heading,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Heading level={1}>We now Auth!</Heading>
      </Card>
      <Button onClick={signOut}>SignOut</Button>
    </View>
  );
}

export default withAuthenticator(App);
