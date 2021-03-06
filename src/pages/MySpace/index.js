import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import Container from "react-bootstrap/Container";
import Loading from "../../components/Loading";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MySpaceForm from "./MySpaceForm";
import StoryForm from "./StoryForm";
import Space from "../../components/Space";
import StoryCarousel from "../../components/StoryCarousel";

export default function MySpace() {
  const { token, space, id } = useSelector(selectUser);
  const [editMode, setEditMode] = useState(false);
  const [postStoryMode, setPostStoryMode] = useState(false);
  const history = useHistory();

  if (token === null) {
    history.push("/");
  }

  if (space === null) {
    return <Loading />;
  }

  const displayButtons =
    id === space.userId && editMode === false && postStoryMode === false;

  return (
    <>
      <Space
        id={space.id}
        title={space.title}
        description={space.description}
        backgroundColor={space.backgroundColor}
        color={space.color}
        showLink={false}
      />
      <Container>
        {displayButtons ? (
          <Card>
            <Button onClick={() => setEditMode(true)}>Edit my space</Button>{" "}
            {/*There is a button with Edit my space on My space that makes a form appear */}
            <Button onClick={() => setPostStoryMode(true)} className="mt-2">
              Post a cool story bro
            </Button>
          </Card>
        ) : null}

        {editMode ? (
          <Card>
            <MySpaceForm />
          </Card>
        ) : null}

        {postStoryMode ? (
          <Card>
            <StoryForm />
          </Card>
        ) : null}

        <StoryCarousel space={space} />
      </Container>
    </>
  );
}
