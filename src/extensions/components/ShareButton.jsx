import React, { useEffect, useState } from "react";
import { Link } from "@strapi/icons";
import { Button, Dialog, DialogBody, Flex, Typography } from "@strapi/design-system";

const ShareButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [origin, setOrigin] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    // @ts-ignore
    setOrigin(CUSTOM_VARIABLES.STRAPI_ADMIN_FE_ORIGIN);
    if (window.location.href.includes("password")) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  } ,[]);

  const getFirstCheckedID = () => {
    let passwordColumnIndex = 0;
    document.querySelectorAll("thead th").forEach((th, i) => {
      if (th.textContent.toLocaleLowerCase() === "password") {
        passwordColumnIndex = i;
        return;
      }
    });
    const checkedInput = document.querySelectorAll("tbody input[type='checkbox']:checked");
    if (checkedInput.length === 0) {
      setContent("No password was selected");
      return;
    } else if (checkedInput.length > 1) {
      setContent("Only one password can be selected at a time");
      return;
    }
    const tr = getParentEl(checkedInput[0], "tr");
    tr.querySelectorAll("td").forEach((td, i) => {
      if (i === passwordColumnIndex) {
        setContent(`${origin}?p=${td.textContent.trim()}`);
        return;
      }
    });
  }

  const getParentEl = (el, parentTag) => {
    if (el.tagName.toLowerCase() === parentTag) {
      return el;
    }
    return getParentEl(el.parentElement, parentTag);
  }

  const onDialogOpen = () => {
    getFirstCheckedID();
    setIsVisible(true);
  }

  if (!isButtonVisible) {
    return null;
  }

  return (
    <>
      <Button variant="default" startIcon={<></>} onClick={onDialogOpen}>Shareable link</Button>
      <Dialog id="share-dialog" onClose={() => setIsVisible(false)} title="Shareable link" isOpen={isVisible}>
        <DialogBody icon={<Link/>}>
          <Flex direction="column" alignItems="center" gap={2}>
            <Flex justifyContent="center">
              <Typography id="confirm-description">{content}</Typography>
            </Flex>
          </Flex>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default ShareButton;