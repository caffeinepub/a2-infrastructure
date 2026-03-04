import Time "mo:core/Time";
import Text "mo:core/Text";
import List "mo:core/List";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    subject : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type Service = {
    title : Text;
    description : Text;
  };

  type Project = {
    title : Text;
    description : Text;
    image : Text;
  };

  let contactSubmissions = List.empty<ContactSubmission>();

  let services = [
    {
      title = "Drafting Services";
      description = "Expert drafting for civil engineering projects.";
    },
    {
      title = "Structural Design";
      description = "Innovative structural solutions.";
    },
    {
      title = "Project Management";
      description = "Comprehensive project management services.";
    },
  ];

  let projects = [
    {
      title = "Bridge Reconstruction";
      description = "Complete bridge overhaul project.";
      image = "bridge.png";
    },
    {
      title = "Water Treatment Plant";
      description = "Design and implementation of water treatment facilities.";
      image = "water_plant.png";
    },
    {
      title = "Highway Expansion";
      description = "Expansion of major highways.";
      image = "highway.png";
    },
  ];

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, subject : Text, message : Text) : async () {
    if (name.size() == 0 or email.size() == 0) {
      Runtime.trap("Name and Email cannot be empty");
    };

    let submission : ContactSubmission = {
      name;
      email;
      phone;
      subject;
      message;
      timestamp = Time.now();
    };

    contactSubmissions.add(submission);
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.toArray();
  };

  public query ({ caller }) func getServices() : async [Service] {
    services;
  };

  public query ({ caller }) func getProjects() : async [Project] {
    projects;
  };
};
