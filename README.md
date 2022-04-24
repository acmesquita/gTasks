# Manager tasks

Sistema para gerenciamento de tarefas.

<img src="./docs/global-arch.png" style="height:500px">

## Sistemas

Com a intenção de construir uma solução distribuida que se comunique utilizando gRPC e REST, foi pensado nos sistemas a seguir.

### Account

Sistema que irá gerenciar as contas registadas no sistema. Sua principal função será gerenciar uma conta, ou seja, irá:

- Registar uma nova conta com as informações como nome do cliente, _username_ e senha para login.
- Atualizar as informações.
- Cancelar uma conta.

Sua principal estrutura pode ser demonstrada abaixo:

<img src="./docs/account-arch.png">

### Tasks

Sistema que irá gerenciar as atividades dos usuários, tendo como principais funções:

- Registrar uma nova atividade informando uma descrição para a atividade, o id e o nome do cliente.
- Atualizar se a atividade foi concluída
- Excluir a atividade

Sua principal estrutura pode ser demonstrada abaixo:

<img src="./docs/tasks-arch.png">
