import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AkitaNgFormsManager } from './forms-manager';
import { fakeAsync, tick } from '@angular/core/testing';

// get forms snapshot
function gs(formsManager) {
  return formsManager.query.getValue();
}

describe('FormsManager', () => {
  let formsManager: AkitaNgFormsManager, control: FormControl, arr: FormArray, group: FormGroup;

  beforeEach(() => {
    formsManager = new AkitaNgFormsManager();
    control = new FormControl('', [Validators.required]);
    arr = new FormArray([]);
    group = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormGroup({
        number: new FormControl(),
        prefix: new FormControl()
      }),
      arr: new FormArray([])
    });

    formsManager
      .upsert('config', control)
      .upsert('arr', arr)
      .upsert('group', group);
  });

  afterEach(() => {
    formsManager.unsubscribe();
    formsManager = null;
  });

  it('should update the store with forms value', fakeAsync(() => {
    expect(gs(formsManager)).toEqual({
      config: {
        value: '',
        valid: false,
        dirty: false,
        invalid: true,
        disabled: false,
        errors: { required: true },
        touched: false,
        pristine: true,
        pending: false
      },
      arr: {
        value: [],
        valid: true,
        dirty: false,
        invalid: false,
        disabled: false,
        errors: null,
        touched: false,
        pristine: true,
        pending: false,
        controls: {}
      },
      group: {
        value: {
          name: null,
          email: null,
          phone: {
            number: null,
            prefix: null
          },
          arr: []
        },
        valid: true,
        dirty: false,
        invalid: false,
        disabled: false,
        errors: null,
        touched: false,
        pristine: true,
        pending: false,
        controls: {
          name: {
            value: null,
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false
          },
          email: {
            value: null,
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false
          },
          phone: {
            value: {
              number: null,
              prefix: null
            },
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false,
            controls: {
              number: {
                value: null,
                valid: true,
                dirty: false,
                invalid: false,
                disabled: false,
                errors: null,
                touched: false,
                pristine: true,
                pending: false
              },
              prefix: {
                value: null,
                valid: true,
                dirty: false,
                invalid: false,
                disabled: false,
                errors: null,
                touched: false,
                pristine: true,
                pending: false
              }
            }
          },
          arr: {
            value: [],
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false
          }
        }
      }
    });
    control.patchValue('New value');
    tick(301);
    expect(gs(formsManager)).toEqual({
      config: {
        value: 'New value',
        valid: true,
        dirty: false,
        invalid: false,
        disabled: false,
        errors: null,
        touched: false,
        pristine: true,
        pending: false
      },
      arr: {
        value: [],
        valid: true,
        dirty: false,
        invalid: false,
        disabled: false,
        errors: null,
        touched: false,
        pristine: true,
        pending: false,
        controls: {}
      },
      group: {
        value: {
          name: null,
          email: null,
          phone: {
            number: null,
            prefix: null
          },
          arr: []
        },
        valid: true,
        dirty: false,
        invalid: false,
        disabled: false,
        errors: null,
        touched: false,
        pristine: true,
        pending: false,
        controls: {
          name: {
            value: null,
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false
          },
          email: {
            value: null,
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false
          },
          phone: {
            value: {
              number: null,
              prefix: null
            },
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false,
            controls: {
              number: {
                value: null,
                valid: true,
                dirty: false,
                invalid: false,
                disabled: false,
                errors: null,
                touched: false,
                pristine: true,
                pending: false
              },
              prefix: {
                value: null,
                valid: true,
                dirty: false,
                invalid: false,
                disabled: false,
                errors: null,
                touched: false,
                pristine: true,
                pending: false
              }
            }
          },
          arr: {
            value: [],
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false
          }
        }
      }
    });
    arr.push(new FormControl('One'));
    arr.push(new FormControl('Two'));
    tick(301);
    expect(gs(formsManager)).toEqual({
      config: {
        value: 'New value',
        valid: true,
        dirty: false,
        invalid: false,
        disabled: false,
        errors: null,
        touched: false,
        pristine: true,
        pending: false
      },
      arr: {
        value: ['One', 'Two'],
        valid: true,
        dirty: false,
        invalid: false,
        disabled: false,
        errors: null,
        touched: false,
        pristine: true,
        pending: false,
        controls: {
          '0': {
            value: 'One',
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false
          },
          '1': {
            value: 'Two',
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false
          }
        }
      },
      group: {
        value: {
          name: null,
          email: null,
          phone: {
            number: null,
            prefix: null
          },
          arr: []
        },
        valid: true,
        dirty: false,
        invalid: false,
        disabled: false,
        errors: null,
        touched: false,
        pristine: true,
        pending: false,
        controls: {
          name: {
            value: null,
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false
          },
          email: {
            value: null,
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false
          },
          phone: {
            value: {
              number: null,
              prefix: null
            },
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false,
            controls: {
              number: {
                value: null,
                valid: true,
                dirty: false,
                invalid: false,
                disabled: false,
                errors: null,
                touched: false,
                pristine: true,
                pending: false
              },
              prefix: {
                value: null,
                valid: true,
                dirty: false,
                invalid: false,
                disabled: false,
                errors: null,
                touched: false,
                pristine: true,
                pending: false
              }
            }
          },
          arr: {
            value: [],
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false
          }
        }
      }
    });
    group.patchValue({
      name: 'Netanel',
      email: 'n@n.com',
      phone: {
        number: 1,
        prefix: 2
      }
    });
    (group.get('arr') as FormArray).push(new FormControl('One'));
    (group.get('arr') as FormArray).push(new FormControl('Two'));
    tick(301);
    expect(gs(formsManager)).toEqual({
      config: {
        value: 'New value',
        valid: true,
        dirty: false,
        invalid: false,
        disabled: false,
        errors: null,
        touched: false,
        pristine: true,
        pending: false
      },
      arr: {
        value: ['One', 'Two'],
        valid: true,
        dirty: false,
        invalid: false,
        disabled: false,
        errors: null,
        touched: false,
        pristine: true,
        pending: false,
        controls: {
          '0': {
            value: 'One',
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false
          },
          '1': {
            value: 'Two',
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false
          }
        }
      },
      group: {
        value: {
          name: 'Netanel',
          email: 'n@n.com',
          phone: {
            number: 1,
            prefix: 2
          },
          arr: ['One', 'Two']
        },
        valid: true,
        dirty: false,
        invalid: false,
        disabled: false,
        errors: null,
        touched: false,
        pristine: true,
        pending: false,
        controls: {
          name: {
            value: 'Netanel',
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false
          },
          email: {
            value: 'n@n.com',
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false
          },
          phone: {
            value: {
              number: 1,
              prefix: 2
            },
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false,
            controls: {
              number: {
                value: 1,
                valid: true,
                dirty: false,
                invalid: false,
                disabled: false,
                errors: null,
                touched: false,
                pristine: true,
                pending: false
              },
              prefix: {
                value: 2,
                valid: true,
                dirty: false,
                invalid: false,
                disabled: false,
                errors: null,
                touched: false,
                pristine: true,
                pending: false
              }
            }
          },
          arr: {
            value: ['One', 'Two'],
            valid: true,
            dirty: false,
            invalid: false,
            disabled: false,
            errors: null,
            touched: false,
            pristine: true,
            pending: false
          }
        }
      }
    });
  }));

  it('should listen to changes - control', fakeAsync(() => {
    const spy = jasmine.createSpy('config control');
    formsManager.selectControl('config').subscribe(spy);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      value: '',
      valid: false,
      dirty: false,
      invalid: true,
      disabled: false,
      errors: { required: true },
      touched: false,
      pristine: true,
      pending: false
    });
    control.patchValue('Update!!!!');
    tick(301);
    expect(spy).toHaveBeenCalledTimes(2); // one before
    expect(spy).toHaveBeenCalledWith({
      value: 'Update!!!!',
      valid: true,
      dirty: false,
      invalid: false,
      disabled: false,
      errors: null,
      touched: false,
      pristine: true,
      pending: false
    });
  }));

  it('should listen to changes - group', fakeAsync(() => {
    const spy = jasmine.createSpy('group control');
    formsManager.selectControl('group').subscribe(spy);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      value: {
        name: null,
        email: null,
        phone: {
          number: null,
          prefix: null
        },
        arr: []
      },
      valid: true,
      dirty: false,
      invalid: false,
      disabled: false,
      errors: null,
      touched: false,
      pristine: true,
      pending: false,
      controls: {
        name: {
          value: null,
          valid: true,
          dirty: false,
          invalid: false,
          disabled: false,
          errors: null,
          touched: false,
          pristine: true,
          pending: false
        },
        email: {
          value: null,
          valid: true,
          dirty: false,
          invalid: false,
          disabled: false,
          errors: null,
          touched: false,
          pristine: true,
          pending: false
        },
        phone: {
          value: {
            number: null,
            prefix: null
          },
          valid: true,
          dirty: false,
          invalid: false,
          disabled: false,
          errors: null,
          touched: false,
          pristine: true,
          pending: false,
          controls: {
            number: {
              value: null,
              valid: true,
              dirty: false,
              invalid: false,
              disabled: false,
              errors: null,
              touched: false,
              pristine: true,
              pending: false
            },
            prefix: {
              value: null,
              valid: true,
              dirty: false,
              invalid: false,
              disabled: false,
              errors: null,
              touched: false,
              pristine: true,
              pending: false
            }
          }
        },
        arr: {
          value: [],
          valid: true,
          dirty: false,
          invalid: false,
          disabled: false,
          errors: null,
          touched: false,
          pristine: true,
          pending: false
        }
      }
    });
    group.patchValue({
      phone: {
        number: 3,
        prefix: 4
      }
    });
    tick(301);
    expect(spy).toHaveBeenCalledTimes(2); // one before
    expect(spy).toHaveBeenCalledWith({
      value: {
        name: null,
        email: null,
        phone: {
          number: 3,
          prefix: 4
        },
        arr: []
      },
      valid: true,
      dirty: false,
      invalid: false,
      disabled: false,
      errors: null,
      touched: false,
      pristine: true,
      pending: false,
      controls: {
        name: {
          value: null,
          valid: true,
          dirty: false,
          invalid: false,
          disabled: false,
          errors: null,
          touched: false,
          pristine: true,
          pending: false
        },
        email: {
          value: null,
          valid: true,
          dirty: false,
          invalid: false,
          disabled: false,
          errors: null,
          touched: false,
          pristine: true,
          pending: false
        },
        phone: {
          value: {
            number: 3,
            prefix: 4
          },
          valid: true,
          dirty: false,
          invalid: false,
          disabled: false,
          errors: null,
          touched: false,
          pristine: true,
          pending: false,
          controls: {
            number: {
              value: 3,
              valid: true,
              dirty: false,
              invalid: false,
              disabled: false,
              errors: null,
              touched: false,
              pristine: true,
              pending: false
            },
            prefix: {
              value: 4,
              valid: true,
              dirty: false,
              invalid: false,
              disabled: false,
              errors: null,
              touched: false,
              pristine: true,
              pending: false
            }
          }
        },
        arr: {
          value: [],
          valid: true,
          dirty: false,
          invalid: false,
          disabled: false,
          errors: null,
          touched: false,
          pristine: true,
          pending: false
        }
      }
    });
  }));

  it('should select the form', () => {
    const spy = jasmine.createSpy('select form');
    formsManager.selectForm('config').subscribe(spy);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      value: '',
      valid: false,
      dirty: false,
      invalid: true,
      disabled: false,
      errors: {
        required: true
      },
      touched: false,
      pristine: true,
      pending: false
    });
  });

  it('should delete a form', () => {
    formsManager.remove('group');
    expect(gs(formsManager)['group']).toBeNull();
  });

  it('should subscribe to validity', fakeAsync(() => {
    const spy = jasmine.createSpy('select form');
    formsManager.selectValid('config').subscribe(spy);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(false);
    control.patchValue('Valid!');
    tick(301);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(true);
    control.patchValue('');
    tick(301);
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith(false);
  }));

  it('should subscribe to errors', fakeAsync(() => {
    const spy = jasmine.createSpy('select form errors');
    formsManager.selectErrors('config').subscribe(spy);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({ required: true });
    control.patchValue('Valid!');
    tick(301);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(null);
    control.patchValue('');
    tick(301);
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith({ required: true });
  }));

  it('should subscribe to errors inside group', fakeAsync(() => {
    const spy = jasmine.createSpy('select form group control errors');
    formsManager.selectErrors('group', 'phone.number').subscribe(spy);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(null);
    group.get('phone.number').setValidators(Validators.required);
    group.get('phone.number').updateValueAndValidity();
    tick(301);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith({ required: true });
    group.get('phone.number').patchValue(12);
    tick(301);
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith(null);
    group.get('phone.number').patchValue('');
    tick(301);
    expect(spy).toHaveBeenCalledTimes(4);
    expect(spy).toHaveBeenCalledWith({ required: true });
  }));

  it('should subscribe to value', fakeAsync(() => {
    const spyPrefix = jasmine.createSpy('prefix');
    const spyEmail = jasmine.createSpy('email');

    formsManager.selectValue('group', 'phone.prefix').subscribe(spyPrefix);
    formsManager.selectValue('group', 'email').subscribe(spyEmail);

    expect(spyPrefix).toHaveBeenCalledTimes(1);
    expect(spyPrefix).toHaveBeenCalledWith(null);

    expect(spyEmail).toHaveBeenCalledTimes(1);
    expect(spyEmail).toHaveBeenCalledWith(null);

    group.get('email').patchValue('m@m.com');
    tick(301);
    expect(spyEmail).toHaveBeenCalledTimes(2);
    expect(spyEmail).toHaveBeenCalledWith('m@m.com');
    // should not effect the prefix subscription
    expect(spyPrefix).toHaveBeenCalledTimes(1);
    group.get('phone.prefix').patchValue('054');
    tick(301);
    // should not effect the email subscription
    expect(spyEmail).toHaveBeenCalledTimes(2);
    expect(spyPrefix).toHaveBeenCalledWith('054');
  }));

  it('should subscribe to value - form array', fakeAsync(() => {
    const spy = jasmine.createSpy('array');

    formsManager.selectValue('group', 'arr').subscribe(spy);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith([]);
    (group.get('arr') as FormArray).push(new FormControl('One'));
    (group.get('arr') as FormArray).push(new FormControl('Two'));
    tick(301);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(['One', 'Two']);
  }));
});
