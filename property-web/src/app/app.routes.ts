import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
    {
        path: "", 
        component: HomeComponent
    },
    {
        path: "aboutus", 
        component: AboutComponent
    },
    {
        path: "blogs", 
        component: BlogsComponent
    },
    {
        path: "contact", 
        component: ContactComponent
    },
    {
        path: "projects", 
        component: ProjectsComponent
    },
    {
        path: "blog-details", 
        component: BlogDetailsComponent
    },
    {
        path: "services", 
        component: ServicesComponent
    },
];
