const onClickGithubIcon = (repoName: string) => {
  const url = `https://github.com/becoding96/${repoName}`;

  window.open(url, "_blank");
};

export default onClickGithubIcon;
