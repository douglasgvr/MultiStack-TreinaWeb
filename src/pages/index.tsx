import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        name={"Douglas Coelho"}
        picture={"https://github.com/douglasgvr.png"}
        rating={4}
        description={"Volta Redonda"}
      />
      {/* <UserInformation
        name={"Sabrina Coelho"}
        picture={"https://github.com/douglasgvr"}
        rating={4}
        description={"Volta Redonda"}
      /> */}
    </div>
  );
}
