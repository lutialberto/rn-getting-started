import React from "react";
import { StyleSheet } from "react-native";

import { ExternalLink } from "./ExternalLink";
import { ViewApp } from "@/components/containers/ViewApp";
import { TextApp } from "./texts/TextApp";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <ViewApp>
      <ViewApp style={styles.getStartedContainer}>
        <TextApp style={styles.getStartedText}>
          Open up the code for this screen:
        </TextApp>

        <ViewApp
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
        >
          <TextApp>{path}</TextApp>
        </ViewApp>

        <TextApp style={styles.getStartedText}>
          Change any of the text, save the file, and your app will automatically
          update.
        </TextApp>
      </ViewApp>

      <ViewApp style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
        >
          <TextApp style={styles.helpLinkText}>
            Tap here if your app doesn't automatically update after making
            changes
          </TextApp>
        </ExternalLink>
      </ViewApp>
    </ViewApp>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
