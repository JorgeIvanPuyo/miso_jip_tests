import { APP_PAGE, USER, PASSWORD } from "../const";
import { SigninPage } from "../units/login/SignInPage";
import { faker } from "@faker-js/faker";
import { CreateMemberPage } from "../units/createMember/CreateMemberPage";

const TITLE_PUBLISH_PAGE = "Boom. It’s out there";

describe("Como usuario quiero crear miembros para gestionar mi comunidad", function () {
    it("Añadir un nuevo miembro con éxito", function () {
      // Given Un usuario con credenciales válidas
      cy.visit(`${APP_PAGE}/ghost/#/signin`);
      cy.wait(1000);
      
      const signinPage = new SigninPage(cy);
      const membersPage = new CreateMemberPage(cy);
  
      // When El usuario inicia sesión con un 'user' y 'password' válidos
      signinPage.loginValidUser(USER, PASSWORD);
      cy.url().should("contain", "/dashboard");
  
      // And El usuario navega a la página de 'Members'
      cy.wait(100);
      membersPage.navigateToMembers();
  
      // And El usuario hace clic en 'New Member'
      membersPage.getNewMemberButton().click();
  
      // And El usuario completa el campo 'nombre' con un nombre válido
      const memberName = faker.person.fullName(); // Ajustado para usar faker.name.findName()
      membersPage.getMemberNameInput().type(memberName,{force: true});
  
      // And El usuario completa el campo 'labels' con etiquetas relevantes
      const labels = 'Etiqueta1'; // Ejemplo de etiquetas
      membersPage.getLabelMember().type(`${labels}{enter}`); // Ajustado para usar getLabelMember()
  
      // And El usuario completa el campo 'note' con una nota relevante
      const note = faker.lorem.sentence();
      membersPage.getMemberNoteTextarea().type(note);
  
      // And El usuario intenta salir de la página
      membersPage.navigateToMembers();
  
      // Then Se muestra un mensaje de confirmación
      // (Agregar verificaciones para el mensaje de confirmación)
  
      // When El usuario hace clic en 'Stay'
      membersPage.getStayButton().click();
  
      // Then La información ingresada permanece en los campos
      // (Agregar verificaciones para confirmar que la información sigue presente)
  
      // When El usuario completa el campo 'email' con una dirección de correo válida
      const memberEmail = faker.internet.email();
      membersPage.getMemberEmailInput().type(memberEmail);
  
      // And El usuario hace clic en 'Save'
      membersPage.getSaveButton().click();
  
      // Then La información de 'signup' se actualiza correctamente
      // (Agregar verificaciones para la actualización de la información de 'signup')
  
      // When El usuario regresa a la lista de 'Members'
      cy.wait(100);
      membersPage.navigateToMembers();
  
      // Then El nuevo miembro agregado aparece en la lista de miembros
      // (Agregar verificaciones para confirmar que el nuevo miembro está en la lista)
    });
});
