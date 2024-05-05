import { faker } from '@faker-js/faker'

export const generateFakeFullName = () => {
  return faker.person.fullName()
}

export const generateFakeFirstName = () => {
  return faker.person.firstName()
}

export const generateFakeLastName = () => {
  return faker.person.lastName()
}

export const generateFakeEmail = () => {
  return faker.internet.email()
}

export const generateFakePhoneNumber = () => {
  return faker.phone.number()
}

export const generateFakeAddress = () => {
  return faker.location.streetAddress()
}

export const generateRandomNumber = (min: number, max: number) => {
  return faker.number.int({ min, max })
}

export const generateRandomWords = (count: number) => {
  return faker.word.words(count)
}

export const generateRandomText = () => {
  return faker.lorem.text()
}
