# 👥 Complete User Profile Data Structure

This file contains the detailed structure for a complete user record, including the main user attributes and the nested `biodata` object, formatted as a single, hierarchical JSON structure for clarity.

---

## 💻 Full User Object (Representation)

This block illustrates the entire data model as it would be represented in a programming language (like JavaScript/Node.js) before being mapped to the SQL database.

```json
{
  "_id": "68627f3cf2687e2f5ee27ed2",
  "name": "LuxeMatches",
  "email": "luxe@matches.com",
  "photoURL": "[https://i.ibb.co/mrtbLH2j/luxe-logo.png](https://i.ibb.co/mrtbLH2j/luxe-logo.png)",
  "isAdmin": true,
  "isPremium": true,
  "createdAt": "2025-06-30T12:12:44.106Z",
  "bioData": {
    "bioDataId": 12,
    "bioDataType": "Male",
    "name": "Md Abu Sufian jidan",
    "image": "[https://i.ibb.co/mrtbLH2j/luxe-logo.png](https://i.ibb.co/mrtbLH2j/luxe-logo.png)",
    "nationality": "Bangladeshi",
    "height": "5'4\"",
    "weight": "60 kg",
    "dob": "2006-08-02",
    "age": "19",
    "religion": "Islam",
    "maritalStatus": "Single",
    "occupation": "Student",
    "education": "General",
    "financialStatus": "Lower",
    "familyCategory": "Other",
    "madhhab": "Hanafi",
    "mobile": "01906844598",
    "fathersName": "Md Mamun Hossain",
    "mothersName": "Ms Jesmin Begum",
    "permanentDivision": "Dhaka",
    "presentDivision": "Dhaka",
    "practicingIslam": "Yes",
    "praysFiveTimes": "Rarely",
    "hijabOrBeard": "Yes",
    "languages": "Bangla, English",
    "hobbies": "Cricket, Football",
    "siblings": "2",
    "familyReligion": "Moderate",
    "partnerReligiousLevel": "Practicing",
    "partnerFinancial": "Low",
    "disability": "None",
    "diet": "Halal Only",
    "expectedPartnerAge": "19",
    "expectedPartnerHeight": "5'4\"",
    "expectedPartnerWeight": "60 kg",
    "contactEmail": "luxe@matches.com"
  }
}