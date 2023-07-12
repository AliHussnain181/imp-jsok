class Stepper {
    constructor(steps) {
      this.steps = steps;
      this.currentStep = 0;
  
      this.prevButton = document.querySelector('.prev-button');
      this.nextButton = document.querySelector('.next-button');
      this.stepElements = document.querySelectorAll('.step');
  
      this.prevButton.addEventListener('click', () => this.prev());
      this.nextButton.addEventListener('click', () => this.next());
  
      this.updateButtons();
      this.updateSteps();
    }
  
    prev() {
      if (this.currentStep > 0) {
        this.currentStep--;
        this.updateButtons();
        this.updateSteps();
      }
    }
  
    next() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
        this.updateButtons();
        this.updateSteps();
      }
    }
  
    updateButtons() {
      if (this.currentStep === 0) {
        this.prevButton.disabled = true;
      } else {
        this.prevButton.disabled = false;
      }
  
      if (this.currentStep === this.steps.length - 1) {
        this.nextButton.innerHTML = 'Submit';
      } else {
        this.nextButton.innerHTML = 'Next';
      }
    }
  
    updateSteps() {
      this.stepElements.forEach((step, index) => {
        if (index === this.currentStep) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });
    }
  }
  
  const steps = [
    'Step 1',
    'Step 2',
    'Step 3'
  ];
  
  const stepper = new Stepper(steps);
  