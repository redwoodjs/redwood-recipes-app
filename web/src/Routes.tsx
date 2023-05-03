// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Route, Router, Set } from '@redwoodjs/router'

import CategoriesLayout from 'src/layouts/Admin/CategoriesLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/about" page={AboutPage} name="about" renderMode="html" />
      <Route path="/simple" redirect="/redirectedSimple" name="simple" />
      <Route path="/redirectedSimple" name="redirectedSimple" page={() => <h1>Redirected page</h1>} />
      <Private unauthenticated="login">
        <Route path="/my-recipes" name="myRecipes" page={MyRecipesPage} />
        <Set wrap={CategoriesLayout}>
          <Route path="/admin/categories/new" page={AdminCategoryNewCategoryPage} name="adminNewCategory" />
          <Route path="/admin/categories/{id}/edit" page={AdminCategoryEditCategoryPage} name="adminEditCategory" />
          <Route path="/admin/categories/{id}" page={AdminCategoryCategoryPage} name="adminCategory" />
          <Route path="/admin/categories" page={AdminCategoryCategoriesPage} name="adminCategories" />
        </Set>
      </Private>
      <Set>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route path="/recipe/{id}" page={RecipePage} name="recipe" />
        <Route path="/" page={LandingPage} name="landing" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
