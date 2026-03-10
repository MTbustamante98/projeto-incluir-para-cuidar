import React from "react";
import { UserContext } from "../CreateUserContext";

const useModifyVideoAndTitle = () => {
  const { changeVideo, modifierValueTitle, openModal } =
    React.useContext(UserContext);

  const modifyVideoAndTitle = React.useCallback(
    (title) => {
      const actions = {
        Apresentação: () => changeVideo("/videos/apresentacao.mp4"),
        Legenda: () => changeVideo("/videos/legenda.mp4"),
        Informação: () => changeVideo("/videos/info.mp4"),
        Rotinas: () => openModal(),
      };
      actions[title]?.();
      modifierValueTitle(title);
    },
    [changeVideo, modifierValueTitle, openModal],
  );

  return modifyVideoAndTitle;
};

export default useModifyVideoAndTitle;
