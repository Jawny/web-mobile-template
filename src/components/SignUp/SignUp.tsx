import React from "react";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonInput,
  IonLabel,
  IonCheckbox,
  IonItem,
  IonText,
  IonRouterLink,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonButtons,
  IonBackButton,
} from "@ionic/react";

export function SignUp() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      allowExtraEmails: formData.get("allowExtraEmails"),
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Sign up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="ion-padding">
          <IonRow>
            <IonCol className="ion-text-center">
              <h2>Sign up</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <form onSubmit={handleSubmit}>
                <IonItem>
                  <IonLabel position="floating">First Name</IonLabel>
                  <IonInput
                    name="firstName"
                    type="text"
                    required
                    autocomplete="given-name"
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Last Name</IonLabel>
                  <IonInput
                    name="lastName"
                    type="text"
                    required
                    autocomplete="family-name"
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Email Address</IonLabel>
                  <IonInput
                    name="email"
                    type="email"
                    required
                    autocomplete="email"
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput
                    name="password"
                    type="password"
                    required
                    autocomplete="new-password"
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    I want to receive inspiration, marketing promotions and
                    updates via email.
                  </IonLabel>
                  <IonCheckbox
                    slot="end"
                    value="allowExtraEmails"
                    name="allowExtraEmails"
                  ></IonCheckbox>
                </IonItem>
                <IonButton type="submit" expand="block">
                  Sign Up
                </IonButton>
              </form>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonText>
                Already have an account?{" "}
                <IonRouterLink href="#">Sign in</IonRouterLink>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
